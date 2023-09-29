import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header>
        <h1 className="title-webites">
          Free YouTube Thumbnail Downloader
        </h1>
        </header>
        <p className="paragraph11">
          Free YouTube Thumbnail Downloader - Instantly grab high-quality thumbnail images. Paste the video's thumbnail URL, and click 'Download Thumbnails' to get started.
        </p>
      
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* SEO-Friendly Paragraphs */}
      <div className="textbody">
  <h2 className="subheading">
    About YouTube Thumbnails
  </h2>
  <p className="paragraph">
    YouTube thumbnails are essential visual elements that provide viewers with a sneak peek of your video's content. They play a crucial role in attracting clicks and engagement.
  </p>
  <p className="paragraph">
    On this YouTube Thumbnail Downloader website, you can easily extract high-quality thumbnails from any YouTube video. These thumbnails can be used for various purposes, including presentations, animations, and more.
  </p>
  <h2 className="subheading">How to Use this Tool</h2>
  <p className="paragraph">
    Using this tool is simple. Copy the URL of the YouTube video for which you want to download the thumbnail. Paste the URL in the input box, and our system will generate different thumbnail options for you in various resolutions.
  </p>
  <p className="paragraph">
    After generating the thumbnails, you can click on the "Copy Image URL" button to easily copy the URL to your clipboard for further use.
  </p>
  <h2 className="subheading">Legal Considerations</h2>
  <p className="paragraph">
    It's important to note that while it is legal to download YouTube video thumbnails, both thumbnails and videos are copyrighted materials. If you plan to reuse them, especially for commercial purposes, you should seek proper permissions from the original content creator.
  </p>
  <h2 className="subheading">Compatibility</h2>
  <p className="paragraph">
    This YouTube Thumbnail Downloader website is compatible with most devices, including Android phones and desktop systems. However, please note that iPhones do not allow image downloads directly. Jailbroken iPhones might provide a workaround for this limitation.
  </p>
  <h2 className="subheading">SEO Considerations</h2>
  <p className="paragraph">
    Reusing YouTube thumbnails may not be the most SEO-friendly practice. Google indexes most thumbnails on YouTube, making it important to differentiate your thumbnail if you plan to use it for SEO purposes. Consider adding unique effects using software like Photoshop to enhance its uniqueness.
  </p>
</div>



    </div>
  );
};

export default Index;
