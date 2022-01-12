export const uploadImg = (ev) => {
    const CLOUD_NAME = 'dueosh7bz'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const UPLOAD_PRESET = 'u7muceu6'

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', UPLOAD_PRESET);

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => res.url)
        .catch(err => console.error(err))
}