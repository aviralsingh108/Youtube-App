const GOOGLE_API_KEY = "AIzaSyDa9cSTQwwPinMpBv0K0zOd41f7tPsAp2Y";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 10;

export const MESSAGE_FETCH_TIME_MSEC = 2000;
