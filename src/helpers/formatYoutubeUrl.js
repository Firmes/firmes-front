export const formatYoutubeUrl = (url) => {

    if (url.includes('watch?v=')) {
        return url.replace('watch?v=', 'embed/').trim()
    }
    if (url.includes('shorts/')) {
        return url.replace('shorts/', 'embed/').trim()
    }

}