import { FaCirclePlay } from "react-icons/fa6";
import { MdDelete, MdDownload } from "react-icons/md";
import { logo } from "../../assets/images/images";

const AudioList = () => {
  return (
    <>
      <div className="video_list">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mb-4">
            <button
              type="button"
              //   onClick={() => {
              //     handleVideoModal(vItems?.video, vItems?.converted_video);
              //   }}
            >
              <div className="h-full bg-[#FFFFFF] p-2 rounded-2xl overflow-hidden flex justify-center items-center mb-4">
                <div className="item_box">
                  <div className="item_box_play">
                    <FaCirclePlay className="text-[#3e57da] text-4xl lg:text-7xl" />
                  </div>
                  <img
                    src={logo}
                    alt="projects02"
                    className="rounded-2xl overflow-hidden"
                  />
                </div>
              </div>
            </button>
            <div>
              <div className="min-h-[70px]">
                <p className="text-[#303030] text-base font-medium pb-2">
                  Title
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <button className="bg-[#626ADF] text-xs lg:text-base font-semibold w-full py-1 px-2 rounded-lg text-white hover:bg-[#1a9bd9]">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-normal">Download</p>
                        <MdDownload />
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <button>
                    <MdDelete className="text-red-600 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="button"
              //   onClick={() => {
              //     handleVideoModal(vItems?.video, vItems?.converted_video);
              //   }}
            >
              <div className="h-full bg-[#FFFFFF] p-2 rounded-2xl overflow-hidden flex justify-center items-center mb-4">
                <div className="item_box">
                  <div className="item_box_play">
                    <FaCirclePlay className="text-[#3e57da] text-4xl lg:text-7xl" />
                  </div>
                  <img
                    src={logo}
                    alt="projects02"
                    className="rounded-2xl overflow-hidden"
                  />
                </div>
              </div>
            </button>
            <div>
              <div className="min-h-[70px]">
                <p className="text-[#303030] text-base font-medium pb-2">
                  Title
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <button className="bg-[#626ADF] text-xs lg:text-base font-semibold w-full py-1 px-2 rounded-lg text-white hover:bg-[#1a9bd9]">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-normal">Download</p>
                        <MdDownload />
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <button>
                    <MdDelete className="text-red-600 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AudioList;
