export class PlaylistList {
    constructor(namePlaylist, imgPlaylist, linkPlaylist) {
        this.namePlaylist = namePlaylist;
        this.imgPlaylist = imgPlaylist;
        this.linkPlaylist = linkPlaylist;
    }

    static getPlaylists() {
        return [
            new PlaylistList(
                "Celeste's playlist",
                new URL('@/assets/media/img/concert-1105666.jpg', import.meta.url).href,
                "/playlistCeleste"
            ),
            new PlaylistList(
                "Ophelia's playlist",
                new URL('@/assets/media/img/concert-1105667.jpg', import.meta.url).href,
                "/playlistOphelia"
            ),
            new PlaylistList(
                "Sabine's playlist",
                new URL('@/assets/media/img/concert-1105668.jpg', import.meta.url).href,
                "/playlistSabine"
            ),
            new PlaylistList(
                "Louis's playlist",
                new URL('@/assets/media/img/concert-1105669.jpg', import.meta.url).href,
                "/playlistLouis"
            )
        ]};
}