// методы объекта
//  если поменять название объекта на playlist-? то все сломается, поэтому
// добавили this( ) - ссылка на этот же объект
const playlist = {
  name: "my amazing playlist",
  rating: 5,
  tracks: ["track01", "track02", "track03"],
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track); //добавление
  },
  updateRating(newrating) {
    this.rating = 4;
  },
  getTrackCount() {
    return this.tracks.length; //количество треков в playlist
  },
};
console.log(playlist.getTrackCount());

playlist.changeName("new playlist name");
console.log(playlist.name);

playlist.addTrack("new track 4");
console.log(playlist.getTrackCount()); //количество треков после добавления
playlist.addTrack("new track 2");
console.log(playlist.getTrackCount()); //еще добавли

playlist.updateRating(4);
console.log(playlist); //вся общая инфа по списку
