class Twitter {
  // search(hashtag) {
  async search() {
    // request to Twitter API
    return [
      { id: 1, body: 'Tweet 1', author: 'Mike' },
      { id: 2, body: 'Tweet 2', author: 'Luke' },
      { id: 3, body: 'Tweet 3', author: 'John' },
      { id: 4, body: 'Tweet 4', author: 'Duke' },
    ]
  }
}

export default Twitter
