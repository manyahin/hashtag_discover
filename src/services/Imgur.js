import axios from 'axios';

class Imgur {
  constructor(clientId) {
    this.clientId = clientId;
    this.isNsfwAllowed = false;
    this.countMax = 10;
  }
  async findImagesByTag(hashtag) {
    const sort = 'top';
    const window = 'week';
    const page = 0;
    const url = `https://api.imgur.com/3/gallery/t/${hashtag}/${sort}/${window}/${page}`;

    const result = await axios.get(url, {
      headers: {
        'Authorization': `Client-ID ${this.clientId}`
      }
    }).catch(err => {
      // todo: display error notification
      console.error(err);
    });

    const imgurData = result.data.data;

    // filter nsfw content
    imgurData.items = imgurData.items.filter(item => {
      return item.nsfw === this.isNsfwAllowed
    });

    // filter only by pictures
    imgurData.items = imgurData.items.filter(item => {
      if (!item.images || !item.images.length) return false
      item.images = item.images.filter(image => image.type === 'image/jpeg' || image.type === 'image/png')
      return !!item.images.length
    });

    // filter by 10
    imgurData.items = imgurData.items.slice(0, this.countMax);

    return result.data;
  }
}

export default Imgur
