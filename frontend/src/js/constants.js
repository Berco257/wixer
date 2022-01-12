import { utilService } from '../services/util.service';

export const SIDEBAR_SECTION = 'sidebarSection'
export const SIDEBAR_INNERSECTION = 'sidebarInnersection'
export const SIDEBAR_COLUMN = 'sidebarColumn'
export const SIDEBAR_ITEM = 'sidebarItem';
export const SECTION = 'section';
export const INNERSECTION = 'innersection';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS_BASIC = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_INNERSECTION,
    name: 'columns',
    icon: 'ViewColumnIcon',
    component: {
      type: INNERSECTION,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_COLUMN,
    name: 'column',
    icon: 'Crop75Icon',
    component: {
      type: COLUMN,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'text',
    icon: 'TextFieldsIcon',
    component: {
      type: 'text',
      data: { txt: 'Change me' },
      style: {
        fontSize: 25,
        color: '#000000',
        fontFamily: 'Arial'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'video',
    icon: 'VideoLibraryIcon',
    component: {
      type: 'video',
      data: { videoId: 'VvU27gvAK40' },
      style: {
        width: 100,
        height: 100,
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'image',
    icon: 'InsertPhotoIcon',
    component: {
      type: 'image',
      data: { url: 'https://random.imagecdn.app/150/150' },
      style: {}
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'button',
    icon: 'SmartButtonIcon',
    component: {
      type: 'button',
      data: { txt: 'Click to Change', hoverColor: '#767676' },
      style: {
        borderRadius: '5px',
        border: 'none',
        paddingBlock: 15,
        paddingInline: 25,
        fontFamily: 'montserrat',
        backgroundColor: '#afafaf'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'gmap',
    icon: 'RoomIcon',
    component: {
      type: 'GMap',
      data: {
        lat: 31.962712994957688,
        lng: 34.91398822780261,
        zoom: 15,
        markerName: 'Ginaton',
        location: 'Ginaton'
      },
      style: {
        height: 200
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'Social',
    icon: 'GroupAddIcon',
    component: {
      type: 'social',
      data: {
        backgroundColor: '#d3d3d3',
        color: '#000000',
        socials: {
          facebook: {
            shown: true,
            url: ''
          },
          instagram: {
            shown: true,
            url: ''
          },
          github: {
            shown: true,
            url: ''
          },
          dribbble: {
            shown: true,
            url: ''
          },
          linkedin: {
            shown: true,
            url: ''
          },
          twitter: {
            shown: true,
            url: ''
          },

        }
      },
      style: { justifyContent: 'space-between' }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'Form',
    icon: 'EmailIcon',
    component: {
      type: 'form',
      data: {
        form:
        {
          name: '',
          email: '',
          phone: '',
          subject: '',
          msg: ''
        },
        isDark: true
      },
      style: { gap: '15px' }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'carousel',
    icon: 'ViewCarouselIcon',
    component: {
      type: 'carousel',
      data: {
        images: [
          {
            id: utilService.makeId(),
            label: 'San Francisco',
            imgPath:
              'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format',
          },
          {
            id: utilService.makeId(),
            label: 'Bird',
            imgPath:
              'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format',
          },
          {
            id: utilService.makeId(),
            label: 'Bali, Indonesia',
            imgPath:
              'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format',
          }
        ]
      },
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  },
]

export const SIDEBAR_ITEMS_NAV = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'nav1',
    image: 'nav1',
    component: {
      style: {
        gap: 16, display: 'flex', color: '#000000', fontSize: 25, fontFamily: 'raleway'
      },
      type: 'nav',
      data: {
        hoverColor: '#868686',
        links: [
          {
            id: utilService.makeId(),
            txt: 'Reservation',
            url: ''
          },
          {
            id: utilService.makeId(),
            txt: 'Menu',
            url: ''
          },
          {
            id: utilService.makeId(),
            txt: 'About',
            url: ''
          },
          {
            id: utilService.makeId(),
            txt: 'Contact',
            url: ''
          },
        ]
      }
    }
  }
]

export const SIDEBAR_ITEMS_HEADER = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Header1',
    image: 'header1',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      cmps: [
        {
          type: INNERSECTION,
          id: utilService.makeId(),
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'LAWRENCE'
                    },
                    style: {
                      fontSize: '27',
                      color: '#000000',
                      fontFamily: 'forum',
                      letterSpacing: '0.35em'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    style: {
                      display: 'flex',
                      fontFamily: 'raleway',
                      fontSize: 16,
                      color: '#000000'
                    },
                    type: 'nav',
                    data: {
                      hoverColor: '#868686',
                      links: [
                        {
                          id: utilService.makeId(),
                          txt: 'Reservation'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Menu'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'About'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Contact'
                        }
                      ]
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 25
              }
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'Order Online',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      paddingBlock: 10,
                      paddingInline: 50,
                      cursor: 'pointer'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
          ],
          style: {
            flexGrow: 1,
          },
        }
      ],
      style: {
        backgroundColor: '#FAF8F1',
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Header2',
    image: 'header2',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        backgroundColor: '#000',
        flexGrow: 0,
        padding: 10,
        display: 'flex',
        alignItems: 'center'
      },
      cmps: [
        {
          type: INNERSECTION,
          id: utilService.makeId(),
          style: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [{
                type: COMPONENT,
                id: utilService.makeId(),
                component: {

                  style: {
                    flexGrow: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '180'
                  },
                  type: 'image',
                  data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641557228/u3wzylxl7s5jn7kdaeqk_ykynhw.svg' }
                }
              }

              ]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [{
                type: COMPONENT,
                id: utilService.makeId(),
                component: {
                  style: {
                    color: '#b09f82',
                    flexGrow: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '34'
                  },
                  type: 'text',
                  data: { txt: '*9996' }
                }
              }]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content'
              },
              cmps: [
                {
                  type: COMPONENT,
                  id: utilService.makeId(),
                  style: {
                    flexGrow: 0,
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  },
                  component: {
                    type: 'image',
                    data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641557348/slyc5yzyraawpadfejws_uw5t8r.svg' },
                    style: {}
                  }
                }
              ]
            }, {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    style: {
                      display: 'flex',
                      color: '#a19d9d',
                      gap: 0,
                    },
                    type: 'nav',
                    data: {
                      hoverColor: '#f6f6f6',
                      links: [
                        {
                          id: utilService.makeId(),
                          txt: 'Israel'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Services'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Models'
                        }
                      ]
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                fontSize: 25
              }
            }
          ]
        }
      ]
    }
  }
]

export const SIDEBAR_ITEMS_SECTIONS = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Header Construction',
    image: 'headerConstruction',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        height: '100vh',
        backgroundImage: 'url("https://i.ibb.co/VCp4MjH/image-1.png")'
      },
      cmps: [
        {
          type: INNERSECTION,
          id: utilService.makeId(),
          style: {},
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {},
              cmps: [
                {
                  type: COMPONENT,
                  id: utilService.makeId(),
                  component: {
                    type: 'nav',
                    data: {
                      hoverColor: '#CFC8c0',
                      links: [
                        {
                          id: utilService.makeId(),
                          txt: 'HOME',
                          url: ''
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'SERVICES',
                          url: ''
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'PROJECTS',
                          url: ''
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'CONTACT',
                          url: ''
                        },
                      ]
                    },
                    style: {
                      flexGrow: 1,
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      color: '#FFFFFF',
                      fontFamily: 'raleway',
                      gap: 40
                    },
                  }
                }
              ]
            }
          ]
        }, {
          type: INNERSECTION,
          id: utilService.makeId(),
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Newel Residential Remodeling'
                    },
                    style: {
                      fontSize: 50,
                      color: '#ebebeb',
                      fontFamily: 'raleway',
                      textAlign: 'center'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Recreating Dream Homes That Last'
                    },
                    style: {
                      fontSize: 30,
                      color: '#fafafa',
                      fontFamily: 'raleway',
                      textAlign: 'center'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          ],
          style: {
            padding: 10,
            flexGrow: 1,
            display: 'flex'
          }
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'sectionMeal',
    image: 'sectionMeal',
    component: {
      type: SECTION,
      style: {
        backgroundImage: 'url(https://static.wixstatic.com/media/46dc18_0998a8ce1f34483cbe31aec42ff6108f~mv2.jpg/v1/fill/w_1068,h_808,al_c,q_85,usm_0.66_1.00_0.01/46dc18_0998a8ce1f34483cbe31aec42ff6108f~mv2.webp)',
        height: 755,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      },
      cmps: []
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    image: 'hero3',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        height: 960,
        backgroundColor: '#faf8f1'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            maxWidth: '1060px',
            margin: 'auto',
            alignItems: 'center',
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                flexGrow: 4,
                alignItems: 'center',
                justifyContent: 'center',
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Made With Love. Simply Delicious' },
                    style: {
                      fontSize: 48,
                      color: '#090f0f',
                      fontFamily: 'forum',
                      textAlign: 'center',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you." },
                    style: {
                      paddingTop: 40,
                      paddingBottom: 40,
                      fontSize: 16,
                      color: '#090f0f',
                      fontFamily: 'raleway',
                      textAlign: 'center',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'View Menu',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      padding: '25px 65px',
                      cursor: 'pointer'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {},
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://static.wixstatic.com/media/46dc18_3487b934a84548e090e13f5ce1bf08ad~mv2.jpg/v1/fill/w_450,h_800,al_c,q_80,usm_0.66_1.00_0.01/46dc18_3487b934a84548e090e13f5ce1bf08ad~mv2.webp' },
                    style: {}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'berco',
    image: 'hero2',
    component: {
      id: utilService.makeId(),
      type: SECTION,
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://static.wixstatic.com/media/46dc18_129ba04ade8a4cf3962ccb05b35e57c7~mv2.jpg/v1/fill/w_980,h_880,al_c,q_85,usm_0.66_1.00_0.01/46dc18_129ba04ade8a4cf3962ccb05b35e57c7~mv2.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            maxWidth: '1060px',
            padding: '0 25px',
            margin: 'auto'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                position: 'relative',
                alignItems: 'center',
                backgroundColor: '#faf8f1',
                maxWidth: '600px',
                margin: '60px 0',
                padding: '50px 60px',
                display: 'flex',
                gap: '25px'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'A Fresh and Seasonal Cuisine' },
                    style: {
                      fontSize: 48,
                      color: '#000000',
                      fontFamily: 'forum',
                      textAlign: 'center',
                      maxWidth: '15ch'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.` },
                    style: {
                      maxWidth: '420px',
                      fontSize: 16,
                      color: '#000000',
                      fontFamily: 'raleway',
                      textAlign: 'center',
                      lineHeight: '1.5em'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'About Lawrence',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      padding: '25px 65px',
                      cursor: 'pointer'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Hero1',
    image: 'hero1',
    component: {
      type: SECTION,
      style: {
        height: 775,
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/heritage_1.jpg)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            width: 800,
            backgroundColor: '#000000c7'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9f835e',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Legacy' },
                    style: {
                      color: '#9f835e',
                      fontSize: 40,
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'The legacy of Mercedes-Benz spans over 125 years in which the company has established its position as one of the leading car manufacturers in the world. Mercedes-Benz has played a key role in the history of the automotive industry and has been and still is a pioneer in the fields of technology, safety, design, motor sports and sustainability.' },
                    style: {
                      color: '#a09d9d',
                      fontSize: 15,
                      marginBottom: 25,
                      fontFamily: 'Arial',
                      textAlign: 'center'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'More about the heritage of Mercedes-Benz >' },
                    style: {
                      color: '#9f835e',
                      fontSize: 15,
                      fontFamily: 'Arial'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Gallery',
    image: 'gallery',
    component: {
      type: SECTION,
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/general/footer-back.png)'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            alignItems: '',
            paddingTop: 40,
            borderTop: '1px solid #696969'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'Mercedes TV',
                      hoverColor: '#000000'
                    },
                    style: {
                      borderRadius: '0px',
                      border: '1px solid #9f835e',
                      paddingBlock: 15,
                      paddingInline: 100,
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      backgroundColor: '#000000'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/11306_mercedes_tv_5.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Stronger than Time- Mercedes G-Class' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/12168_ao_oct_pics_4-1-e1604495033850.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "EQC- It's more than electric. It's a Mercedes" },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_3.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'The new EQB' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "The all-new EQA- It's more than electric. It's a Mercedes" },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/2020-06-24_1300-002.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLE Coupe - a road animal with all the equipment and technology you could ask for' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/10161_awo_january_banner_atar_avtr_310x190_1-1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Mercedes AMG- takes you to the edge' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/11306_mercedes_tv_5.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLA- The best Premium compact SUV' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/MBC27200-1-1.jpg' },
                    style: {
                      width: 285
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Mercedes S Class - the best luxury car in the world' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            paddingBottom: 40,
            borderBottom: '1px solid #696969'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_4.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'The new E-Class Coupe : Made to be dynamic' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_2-1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'E-Class Cabriolet - More then ever' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/ANG.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'AMG GT Black Series - uncompromisingly sporty' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/2020-07-14_1446.jpg' },
                    style: {
                      width: 285
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLB- The most beautiful form of freedom in the recreational vehicle that will take you to a world of new experiences' },
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    name: 'dental hero',
    image: 'dentalHero',
    type: SIDEBAR_SECTION,
    component: {
      type: SECTION,
      style: {},
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Professional' },
                style: {
                  fontSize: 44,
                  color: '#092f57',
                  fontFamily: 'poppins',
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Dental Clinic' },
                style: {
                  fontSize: 44,
                  color: '#092f57',
                  fontFamily: 'poppins',
                  marginBottom: 30,
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Qualified dental caring for all your dental needs' },
                style: {
                  fontSize: 18,
                  color: '#989cac',
                  fontFamily: 'poppins',
                  marginBottom: 45,
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'button',
                data: { txt: 'Order a Consultation', hoverColor: '#092f57' },
                style: {
                  borderRadius: '5px',
                  border: 'none',
                  padding: '15px',
                  width: 239,
                  fontFamily: 'poppins',
                  backgroundColor: '#00a0dc',
                  color: '#ffffff',
                  textAlign: 'center'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'image',
                data: {
                  url: 'https://storage.boxmode.com/9626642894/assets/dentio-main.jpg?profile=original'
                },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'remodelingServices',
    image: 'remodelingServices',
    component: {
      id: utilService.makeId(),
      type: SECTION,
      style: {
        backgroundColor: '#262626',
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://static.wixstatic.com/media/ea26fd_724a836736c64fc38c4fd21fa32ba9a9~mv2_d_4997_4480_s_4_2.jpg/v1/fill/w_661,h_700,al_c,q_85,usm_0.66_1.00_0.01/ea26fd_724a836736c64fc38c4fd21fa32ba9a9~mv2_d_4997_4480_s_4_2.webp' },
                    style: {
                      width: 'auto'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                justifyContent: 'center',
                border: '1px solid #9a8a78',
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Our Services' },
                    style: {
                      fontSize: 40,
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      marginBottom: 35
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '• Complete Remodeling' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '• Kitchen Remodeling' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '• Bathroom Remodeling' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '• Home Interior' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '• Flooring' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: { txt: 'MORE INFO', hoverColor: '#b3a89a' },
                    style: {
                      border: 'none',
                      paddingBlock: 15,
                      paddingInline: 25,
                      fontFamily: 'raleway',
                      fontSize: 14,
                      backgroundColor: '#9a8a78',
                      color: '#262626'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641557487/house_kf8eia_ihvqs6.svg' },
                    style: {
                      marginBottom: 25,
                      width: 65
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Vast' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Experience' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641555848/puzzle_lpp992_ezpyzb.svg' },
                    style: {
                      marginBottom: 25,
                      width: 65
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Professional' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Team' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641555935/bloks_nmoork_tndsvo.svg' },
                    style: {
                      marginBottom: 25,
                      width: 65
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'High' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Finish' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641556016/pillar_dl7a2d_qfawpq.svg' },
                    style: {
                      marginBottom: 25,
                      width: 65
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Sustainable' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '& Accountable' },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      fontSize: 18
                    }
                  }
                },
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                justifyContent: 'center',
                border: '1px solid #9a8a78'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'About Us' },
                    style: {
                      fontSize: 40,
                      color: '#ffffff',
                      fontFamily: 'raleway',
                      marginBottom: 35
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Newel Residential Remodeling' },
                    style: {
                      fontSize: 40,
                      color: '#9a8a78',
                      fontFamily: 'raleway',
                      marginBottom: 35
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'raleway',
                    }
                  }
                },

              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9a8a78',
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://static.wixstatic.com/media/ea26fd_0e8eb61209a542fda3b36451a15530fc~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_662,h_651,al_c,q_85,usm_0.66_1.00_0.01/ea26fd_0e8eb61209a542fda3b36451a15530fc~mv2_d_6720_4480_s_4_2.webp' },
                    style: {
                      width: 'auto'
                    }
                  }
                }
              ]
            }

          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Remodeling Testimonials',
    image: 'testimonials',
    component: {
      id: utilService.makeId(),
      type: SECTION,
      style: {
        backgroundColor: '#262626',
        paddingBottom: 85,
        paddingTop: 85
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            backgroundColor: '#9a8a78',
            border: '1px solid #9a8a78',
            justifyContent: 'center',
            paddingTop: 40,
            paddingBottom: 40
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Testimonials' },
                style: {
                  fontSize: 40,
                  color: '#ffffff',
                  fontFamily: 'raleway',
                }
              }
            },
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            border: '1px solid #9a8a78',
            justifyContent: 'center',
            paddingTop: 40,
            paddingBottom: 40
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
                style: {
                  color: '#ffffff',
                  fontFamily: 'raleway',
                  marginBottom: 25
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'The Mathews' },
                style: {
                  color: '#9a8a78',
                  fontFamily: 'raleway',
                  fontSize: 30
                }
              }
            },
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            border: '1px solid #9a8a78',
            justifyContent: 'center',
            paddingTop: 40,
            paddingBottom: 40
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
                style: {
                  color: '#ffffff',
                  fontFamily: 'raleway',
                  marginBottom: 25
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Lars & MaryWilliams' },
                style: {
                  color: '#9a8a78',
                  fontFamily: 'raleway',
                  fontSize: 30
                }
              }
            },
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            border: '1px solid #9a8a78',
            justifyContent: 'center',
            paddingTop: 40,
            paddingBottom: 40
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
                style: {
                  color: '#ffffff',
                  fontFamily: 'raleway',
                  marginBottom: 25
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Chris Parks' },
                style: {
                  color: '#9a8a78',
                  fontFamily: 'raleway',
                  fontSize: 30
                }
              }
            },
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'furniture carousle',
    image: 'furniCarousle',
    component: {


      "id": utilService.makeId(),
      "type": SECTION,
      "cmps": [
        {
          "type": INNERSECTION,
          "id": utilService.makeId(),
          "cmps": [
            {
              "type": COLUMN,
              "id": utilService.makeId(),
              "cmps": [
                {
                  "id": utilService.makeId(),
                  "type": COMPONENT,
                  "component": {
                    "type": "text",
                    "data": {
                      "txt": "Recent Projects"
                    },
                    "style": {
                      "fontSize": 40,
                      "color": "#ffffff",
                      "fontFamily": "raleway-semi-bold",
                      "textAlign": "center"
                    }
                  }
                }
              ],
              "style": {
                "padding": 10,
                "flexGrow": 1,
                "flexDirection": COLUMN,
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center"
              }
            }
          ],
          "style": {
            "padding": 10,
            "flexGrow": 1,
            "display": "flex",
            "paddingBottom": 0,
            "paddingTop": 50
          }
        },
        {
          "type": INNERSECTION,
          "id": utilService.makeId(),
          "cmps": [
            {
              "type": COLUMN,
              "id": utilService.makeId(),
              "cmps": [
                {
                  "id": utilService.makeId(),
                  "type": COMPONENT,
                  "component": {
                    "type": "carousel",
                    "data": {
                      "images": [
                        {
                          "id": utilService.makeId(),
                          "label": "Dining Table",
                          "imgPath": "https://res.cloudinary.com/dueosh7bz/image/upload/v1641556222/b1wrguzkaf0v15sv0dt6_xvbena.webp"
                        },
                        {
                          "id": utilService.makeId(),
                          "label": "View windows",
                          "imgPath": "https://res.cloudinary.com/dueosh7bz/image/upload/v1641556304/bzs1ocvnzlk6ahhtjfo5_puifgg.webp"
                        },
                        {
                          "id": utilService.makeId(),
                          "label": "Designed kitchen",
                          "imgPath": "https://res.cloudinary.com/dueosh7bz/image/upload/v1641556391/yajtajgf4vn8bmj3lf0b_hjwwmu.webp"
                        },
                        {
                          "id": utilService.makeId(),
                          "label": "Kitchen cabinets",
                          "imgPath": "https://res.cloudinary.com/dueosh7bz/image/upload/v1641556482/dvj9mtystrgge1lkxy4p_u0rnfv.jpg"
                        },
                        {
                          "id": utilService.makeId(),
                          "label": "Guest lobby",
                          "imgPath": "https://res.cloudinary.com/dueosh7bz/image/upload/v1641556562/vzc9ylutsehxs4ppkynn_gqtd94.webp"
                        }
                      ]
                    },
                    "style": {
                      "display": "flex",
                      "justifyContent": "center"
                    }
                  }
                }
              ],
              "style": {
                "padding": 10,
                "flexGrow": 1,
                "flexDirection": COLUMN,
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center"
              },
              "data": {
                "txt": "Recent Projects"
              }
            }
          ],
          "style": {
            "padding": 10,
            "flexGrow": 0,
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center"
          }
        },
        {
          "type": INNERSECTION,
          "id": utilService.makeId(),
          "cmps": [
            {
              "type": COLUMN,
              "id": utilService.makeId(),
              "cmps": [
                {
                  "id": utilService.makeId(),
                  "type": COMPONENT,
                  "component": {
                    "type": "button",
                    "data": {
                      "txt": "VIEW ALL",
                      "hoverColor": "#b3a89a"
                    },
                    "style": {
                      "borderRadius": "5px",
                      "border": "none",
                      "height": "50px",
                      "padding": "15px",
                      "width": "150px",
                      "fontFamily": "raleway",
                      "backgroundColor": "#9a8a78",
                      "alignItems": "center",
                      "justifyContent": "center",
                      "color": "#262626",
                      "paddingInline": 60,
                      "paddingBlock": 16,
                      "fontSize": 16
                    }
                  }
                }
              ],
              "style": {
                "padding": 10,
                "flexGrow": 1,
                "flexDirection": COLUMN,
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center"
              }
            }
          ],
          "style": {
            "padding": 10,
            "flexGrow": 1,
            "display": "flex",
            "paddingBottom": 50
          }
        }
      ],
      "style": {
        "backgroundColor": "#262626"
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'dental footer reviews',
    image: 'dentalReviews',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        gap: '20px'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641553374/review1_fnmod0_eadrrw.jpg' },
                style: {}
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: '“I was quite impressed by the team of doctors, they were confident, they were smiling and they could inspire confidence.”' },
                style: {
                  fontFamily: 'opensans',
                  color: '#989cac'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641553406/review2_mmdwbv_akxyn3.jpg' },
                style: {}
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: '“Dentio is well-administered by the Doctors. The best part is that one can get consultation with the specialist as per your convenience.”' },
                style: {
                  fontFamily: 'opensans',
                  color: '#989cac'
                }
              }
            }
          ]
        },
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'dental footer services',
    image: 'dentalServices',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {},
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            alignItems: 'center'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647866/assets/service-1-370x232.jpg?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Dental Implants' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  fontSize: 22,
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Implants provide a foundation for replacement teeth made to match your natural teeth.' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Learn more >' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc',
                  marginTop: 30
                }
              }
            },
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            alignItems: 'center'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626646881/assets/service-2-370x232.jpg?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'General Dental Care' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  fontSize: 22,
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'This dental service includes routine dental examinations or check-ups & oral health advice.' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Learn more >' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc',
                  marginTop: 30
                }
              }
            },
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            alignItems: 'center'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647856/assets/service-3-370x232.jpg?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Teeth Whitening' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  fontSize: 22,
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Teeth bleaching & teeth whitening are fast, easy ways to brighten teeth and enhance your smile.' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginBottom: 15
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Learn more >' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc',
                  marginTop: 30
                }
              }
            },
          ]
        }
      ]
    }
  }
];

export const SIDEBAR_ITEMS_FOOTER = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'footer1',
    image: 'footer1',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 420,
        backgroundColor: '#090f0f'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            alignSelf: 'center',
            gap: '20px',
            justifyContent: 'space-around',
            width: '1060px',
            padding: '0 25px',
            margin: 'auto'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Address' },
                    style: {
                      fontSize: 32,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: '500 Terry Francois Street' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'San Francisco, CA 94158' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Opening Hours' },
                    style: {
                      fontSize: 32,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Mon - Fri: 11am - 10pm' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Sat - Sun: 11am - 12am' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Contact Us' },
                    style: {
                      fontSize: 32,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'info@mysite.com' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: '123 456 6780' },
                    style: {
                      fontSize: 22,
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'footer2',
    image: 'footer2',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/general/footer-back.png)',
        justifyContent: 'center'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            height: 180
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {},
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'The knowledge and data that appear on this site refer to a variety of models that are marketed in different places in the world and are updated to the date of bringing the foreign source for translation. There may be differences between the description provided on this site and the models marketed by our company, both in terms of technical specifications and in terms of accessories, equipment and related systems. There may also be differences in a particular model, depending on the changes made from time to time. Some of the accessories and / or systems listed on this site are found only in some of the vehicle models, the publication presented on this site does not oblige the manufacturer and / or the company to supply models that include all or some of the accessories, equipment and systems described therein and reserve the right to cancel, add , Change and improve, without prior notice and without updating on this site. The photos on the site are for illustration only. The site is subject to change without notice. T.L.H.'
                    },
                    style: {
                      color: '#A09D9D'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/social-bg-1.jpg)',
            height: 175,
            alignItems: 'center'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Mercedes-Benz on Instagram',
                    },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'Arial',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'All updates, innovations, events, models.',
                    },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'Arial',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'Follow Us',
                      hoverColor: '#00abec'
                    },
                    style: {
                      borderRadius: '5px',
                      border: 'none',
                      paddingBlock: 15,
                      paddingInline: 25,
                      fontFamily: 'Arial',
                      color: '#ffffff',
                      backgroundColor: '#00abec'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            paddingTop: 20,
            alignSelf: 'center',
            backgroundColor: '#000000'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      paddingBottom: 30,
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'Mercedes-Benz *9996'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      paddingBottom: 30,
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'Customer service: Tel. 03-9153030'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'Privacy Policy'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Terms of Use'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Accessibility statement'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Air pollution and fuel consumption indices'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Price list for Mercedes spare parts'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'About Mercedes-Benz'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Customer Service'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Contact Us'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Mercedes Star Magazine'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555',
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'image',
                    style: {
                      width: 218,
                      height: 100
                    },
                    data: {
                      url: 'https://www.mercedes-benz.co.il/wp-content/themes/mercedes/images/mercedes-logo-forsite.svg'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'Mercedes Benz Israel was founded by Colmobil in 1963, and was the first importer of luxury cars in Israel. Mercedes Benz Israel is part of Colmobil, which was founded in 1936 and is owned by the Harlap family. The Colmobil Group is the leading car importer in Israel of both private vehicles and commercial vehicles, trucks and buses to Israel.'
                    }
                  }
                }
              ]
            }
          ]

        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'dental footer call now',
    image: 'dentalFotterCallNow',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {},
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            alignItems: 'center'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Call Now and Get a Free Consultation' },
                style: {
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 44,
                  color: '#092f57',
                  marginBottom: 12
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Let our team handle all your dental healthcare issues.' },
                style: {
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginBottom: 20
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Free Consultation from Our Expert Advisors' },
                style: {
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  color: '#092f57',
                  marginBottom: 12
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: '+800 4759 1232' },
                style: {
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 40,
                  color: '#00a0dc',
                  marginBottom: 12
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'button',
                data: { txt: 'Request a Callback', hoverColor: '#092f57' },
                style: {
                  borderRadius: '5px',
                  border: 'none',
                  padding: '15px',
                  width: 370,
                  fontSize: 15,
                  color: '#ffffff',
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  backgroundColor: '#00a0dc'
                }
              }
            }
          ]
        },
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'dental footer upper',
    image: 'dentalFooterUpper',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {},
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647491/assets/brand-1.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647076/assets/brand-2.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647291/assets/brand-3.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647663/assets/brand-4.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626642461/assets/brand-5.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://storage.boxmode.com/9626647875/assets/brand-6.png?profile=original' },
                style: {
                  width: 'auto'
                }
              }
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'dental footer',
    image: 'dentalFooter',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {},
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'image',
                data: { url: 'https://res.cloudinary.com/dueosh7bz/image/upload/v1641553705/dentiologo_lx7ydj_bnenpy.jpg' },
                style: {
                  width: 110
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'NAVIGATION' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  marginBottom: 20
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Home' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'About' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Services' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Teams' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Contacts' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'DENTAL HEALTHCARE' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  marginBottom: 20
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Cosmetic Dentistry' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Endodontics' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Oral Surgery' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'General Dental Care' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Pediatric Dentistry' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'PHONE & ADDRESS' },
                style: {
                  fontFamily: 'poppins',
                  color: '#092f57',
                  marginBottom: 20
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: '+800 4759 1232' },
                style: {
                  fontFamily: 'poppins',
                  color: '#00a0dc',
                  fontSize: 24
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: '3674 Harrison Street' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginTop: 15,
                  fontSize: 14
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'San Francisco, CA 94143, USA' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  marginBottom: 15,
                  fontSize: 14
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Mon–Fri: 8:00 am to 8:00 pm' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  fontSize: 14
                }
              }
            },
            {
              id: utilService.makeId(),
              type: 'component',
              component: {
                type: 'text',
                data: { txt: 'Sat–Sun: 8:00 am to 4:00 pm' },
                style: {
                  fontFamily: 'poppins',
                  color: '#989cac',
                  fontSize: 14
                }
              }
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'remodeling',
    image: 'remodeling',
    component: {
      id: utilService.makeId(),
      type: SECTION,
      style: {
        backgroundColor: '#262626'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Contact Us' },
                style: {
                  fontSize: 40,
                  fontFamily: 'raleway',
                  marginBottom: 30,
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: '500 Terry Francois Street' },
                style: {
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'San Francisco, CA 94158' },
                style: {
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'info@mysite.com' },
                style: {
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: '123-456-7890' },
                style: {
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'form',
                data: {
                  form: {
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    msg: ''
                  },
                  isDark: false
                }
                ,
                style: {}
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Home' },
                style: {
                  fontSize: 14,
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Services' },
                style: {
                  fontSize: 14,
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Projects' },
                style: {
                  fontSize: 14,
                  fontFamily: 'raleway',
                  color: '#9a8a78'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Contact' },
                style: {
                  fontSize: 14,
                  fontFamily: 'raleway',
                  color: '#9a8a78',
                  marginBottom: 52
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'button',
                data: { txt: 'CALL NOW', hoverColor: '#b3a89a' },
                style: {
                  border: 'none',
                  padding: 15,
                  width: 129,
                  color: '##262626',
                  fontFamily: 'raleway',
                  backgroundColor: '#9a8a78',
                  textAlign: 'center'
                }
              }
            }
          ]
        }
      ]
    }
  }
]

// const template = {
//   type: SIDEBAR_SECTION,
//   id: utilService.makeId(),
//   component: {
//     type: SECTION,
//     style: {},
//     cmps: [{
//       id: utilService.makeId(),
//       type: INNERSECTION,
//       style: {},
//       cmps: [
//         {
//           id: utilService.makeId(),
//           type: COLUMN,
//           style: {},
//           cmps: [
//             {
//               id: utilService.makeId(),
//               type: 'component',
//               component: {
//                 type: 'text',
//                 data: {
//                   txt: 'Services'
//                 },
//                 style: {
//                   fontSize: 16,
//                   color: '#ffffff',
//                   fontFamily: 'Arial'
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     }]
//   }
// }