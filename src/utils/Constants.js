const GOOGLE_API_KEY = "AIzaSyDa9cSTQwwPinMpBv0K0zOd41f7tPsAp2Y";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  GOOGLE_API_KEY;