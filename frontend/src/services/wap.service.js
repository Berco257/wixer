import { SECTION, COLUMN, COMPONENT, INNERSECTION } from "../js/constants";
import { utilService } from "./util.service";

// a little function to help us with reordering the result
export function reorder(list, idx, targetIdx) {
  const result = Array.from(list);
  const [removed] = result.splice(idx, 1);
  result.splice(targetIdx, 0, removed); // inserting element in new index

  return result;
}

export function remove(arr, index) {
  // return [
  //   ...arr.slice(0, index),
  //   ...arr.slice(index + 1)
  // ]
  return [...arr.splice(index, 1)]
}

export function insert(arr, index, newItem) {
  return [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]
}

const _deepMakeId = (item) => {
  if (item?.id) item.id = utilService.makeId();
  if (item?.cmps) {
    item.cmps.forEach(cmp => {
      _deepMakeId(cmp)
    })
  }
}

export function duplicate(wap, item) {
  const { splitItemPath, type } = item
  let idx;
  let newWap = JSON.parse(JSON.stringify(wap));
  switch (type) {
    case SECTION:
      item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]]));
      _deepMakeId(item)
      newWap = insert(newWap, splitItemPath[0] + 1, item);
      break;
    case INNERSECTION:
      item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]]));
      _deepMakeId(item)
      idx = splitItemPath[1];
      idx = idx < 0 ? 0 : idx;
      newWap[splitItemPath[0]].cmps = insert(newWap[splitItemPath[0]].cmps, idx, item);
      break;
    case COLUMN:
      if (splitItemPath.length === 3) {
        item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]]));
        _deepMakeId(item)
        idx = splitItemPath[2];
        idx = idx < 0 ? 0 : idx;
        newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps = insert(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps, idx, item);
      }
      else {
        item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]]));
        _deepMakeId(item)
        idx = splitItemPath[1];
        idx = idx < 0 ? 0 : idx;
        newWap[splitItemPath[0]].cmps = insert(newWap[splitItemPath[0]].cmps, idx, item);
      }
      break;
    default:
      switch (splitItemPath.length) {
        case 3:
          item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]]));
          _deepMakeId(item)
          idx = splitItemPath[2];
          idx = idx < 0 ? 0 : idx;
          newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps = insert(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps, idx, item);
          break;
        case 4:
          item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]]));
          if (item.cmps) {
            item = { ...item.cmps[splitItemPath[3]] }
            _deepMakeId(item)
            idx = splitItemPath[3];
            idx = idx < 0 ? 0 : idx;
            newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps = insert(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps, idx, item);
          }
          else {
            //case nav
            item = JSON.parse(JSON.stringify(item.component.data.links[splitItemPath[3]]))
            _deepMakeId(item)
            idx = splitItemPath[3];
            idx = idx < 0 ? 0 : idx;
            newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].component.data.links = insert(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].component.data.links, idx, item);
          }
          break;
        default:
          item = JSON.parse(JSON.stringify(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links[splitItemPath[4]]));
          _deepMakeId(item)
          idx = splitItemPath[4];
          idx = idx < 0 ? 0 : idx;
          newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links = insert(newWap[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links, idx, item);
          break;
      }
      break;
  }

  return newWap;
}

export function reorderChildren(children, splitDropZonePath, splitItemPath) {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[splitDropZonePath.length - 1]);
    const itemIndex = Number(splitItemPath[splitItemPath.length - 1]);
    return reorder(children, itemIndex, dropZoneIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  let lastIdxPath = splitDropZonePath.slice(1);
  lastIdxPath[lastIdxPath.length - 1] =
    (+splitDropZonePath[splitDropZonePath.length - 1] > +splitItemPath[splitItemPath.length - 1] && splitDropZonePath.length === 2) ?
      lastIdxPath[lastIdxPath.length - 1] - 1 : lastIdxPath[lastIdxPath.length - 1]
  const splitDropZoneChildrenPath = lastIdxPath
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    cmps: reorderChildren(
      nodeChildren.cmps,
      splitDropZoneChildrenPath,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
}

export function removeChildFromChildren(layout, item) {
  const { type, splitItemPath } = item
  switch (type) {
    case SECTION:
      layout.splice(splitItemPath[0], 1)
      return layout
    case INNERSECTION:
      layout[splitItemPath[0]].cmps.splice(splitItemPath[1], 1)
      return layout
    case COLUMN:
      if (splitItemPath.length === 3) layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps.splice(splitItemPath[2], 1)
      else layout[splitItemPath[0]].cmps.splice(splitItemPath[1], 1)
      return layout
    default:
      let component;
      switch (splitItemPath.length) {
        case 3:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]]
          break;
        case 4:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]]
          break;
        default:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]]
          break;
      }
      if (component.cmps) component.cmps.splice(splitItemPath[splitItemPath.length - 1], 1)
      else component.component.data.links.splice(splitItemPath[splitItemPath.length - 1], 1)
      return layout

  }
}

export function addChildToChildren(children, splitDropZonePath, item) {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    return insert(children, dropZoneIndex, item);
  }

  const updatedChildren = [...children];

  let curIndex = Number(splitDropZonePath[0]);
  curIndex = (curIndex >= children.length) ? --curIndex : curIndex

  // Update the specific node's children
  const splitItemChildrenPath = splitDropZonePath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    cmps: addChildToChildren(
      nodeChildren.cmps,
      splitItemChildrenPath,
      item
    )
  };

  return updatedChildren;
}

export function handleAddColumDataToRow(layout) {
  const layoutCopy = [...layout];
  return layoutCopy.filter(section => {
    return section.cmps.length
  })

}

export function handleMoveToDifferentParent(layout, splitDropZonePath, splitItemPath, item) {
  let newLayoutStructure;
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: utilService.makeId(),
    style: {},
    cmps: [item]
  };

  const SECTION_STRUCTURE = {
    id: utilService.makeId(),
    type: SECTION,
    style: {}
  };

  switch (splitDropZonePath.length) {
    case 1:
      // moving column outside into new row made on the fly
      if (item.type === COLUMN || item.type === INNERSECTION) {
        newLayoutStructure = {
          ...SECTION_STRUCTURE,
          cmps: [item]
        };
      }
      else {
        // moving component outside into new row made on the fly
        newLayoutStructure = {
          ...SECTION_STRUCTURE,
          cmps: [COLUMN_STRUCTURE]
        };
      }
      break;
    case 2:
      // moving component outside into a row which creates column
      if (item.type === COMPONENT) {
        newLayoutStructure = COLUMN_STRUCTURE;
      } else {
        // moving column into existing row
        newLayoutStructure = item;
      }

      break;


    case 3:
      const dropCmp = layout[splitDropZonePath[0]].cmps[splitDropZonePath[1]].cmps
      if (item.type === COLUMN) {
        newLayoutStructure = item;
      }
      //moving component to inner section

      else if (dropCmp.length && dropCmp[dropCmp.length - 1].type === COLUMN) {
        newLayoutStructure = COLUMN_STRUCTURE;
      }
      else {
        newLayoutStructure = item;
      }
      break;
    default:
      newLayoutStructure = item;

  }

  let updatedLayout = layout;
  updatedLayout = removeChildFromChildren(updatedLayout, { type: item.type, splitItemPath });
  updatedLayout = handleAddColumDataToRow(updatedLayout);
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  );

  return updatedLayout;
}

export function handleMoveSidebarInnerSectionIntoParent(layout, splitDropZonePath,) {
  switch (splitDropZonePath.length) {

    case 1:
      const newLayoutStructure = {
        id: utilService.makeId(),
        type: SECTION,
        cmps: [_generateInnerSection()],
        style: {}
      };
      return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
    default:
      return addChildToChildren(layout, splitDropZonePath, _generateInnerSection());
  }
}

export function handleMoveSidebarColumnIntoParent(layout, splitDropZonePath,) {
  switch (splitDropZonePath.length) {
    case 1:
      const newLayoutStructure = {
        type: SECTION,
        id: utilService.makeId(),
        cmps: [_generateColumn()],
        style: {}
      };
      return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
    default:
      return addChildToChildren(layout, splitDropZonePath, _generateColumn());
  }
}

export function handleMoveSidebarComponentIntoParent(layout, splitDropZonePath, item) {
  let newLayoutStructure;
  switch (splitDropZonePath.length) {
    case 1:
      newLayoutStructure = {
        type: SECTION,
        id: utilService.makeId(),
        cmps: [_generateColumn(item)],
        style: {}
      };
      break;
    case 2:
      newLayoutStructure = _generateColumn(item);
      break;
    case 3:
      if (layout[splitDropZonePath[0]].cmps[splitDropZonePath[1]].type === INNERSECTION) newLayoutStructure = _generateColumn(item)
      else newLayoutStructure = item;
      break;
    default:
      newLayoutStructure = item;
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
}

function _generateColumn(item = null) {
  return {
    type: COLUMN,
    id: utilService.makeId(),
    cmps: item ? [item] : [],
    style: {
      padding: 10,
      flexGrow: 1,
      flexDirection: 'column',
      display: 'flex',
    }
  }
}

function _generateInnerSection(item = null) {
  return {
    type: INNERSECTION,
    id: utilService.makeId(),
    cmps: [_generateColumn(), _generateColumn(), _generateColumn()],
    style: {
      padding: 10,
      flexGrow: 1,
      display: 'flex'
    }
  }
}
