import {
  Button,
  FileInput,
  Label,
  Progress,
  Select,
  Textarea,
} from "flowbite-react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ManageAudio = () => {
  return (
    <div>
      <div className="wrapper_area my-0 mx-auto p-6 rounded-xl bg-white">
        <div className="h-full lg:h-screen">
          <div className="mb-4">
            <div className="flex items-center">
              <Button className="bg-white hover:bg-[#D8D8D8] border-[#D8D8D8] w-[36px] h-[36px] mr-2 text-black hover:text-white text-base font-semibold flex justify-center items-center rounded-md">
                <MdOutlineKeyboardBackspace className="text-base" />
              </Button>
              <h2 className="text-2xl font-semibold">Add New Audio</h2>
            </div>
          </div>
          <div className="border-[#D8D8D8] border rounded-2xl p-5 flex gap-10">
            <div className="w-6/12">
              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="comment">
                    Story Text or Narration Script
                  </Label>
                </div>
                <Textarea
                  id="comment"
                  placeholder="Leave a comment..."
                  required
                  rows={12}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="comment">Upload Story Script</Label>
                </div>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <AiOutlineCloudUpload className="text-[#52B69A] text-6xl mb-4" />
                      <p className="mb-2 text-[18px] text-[#52B69A] dark:text-gray-400">
                        <span className="font-semibold text-black">
                          Drag & drop files or
                        </span>{" "}
                        Browse
                      </p>
                      <p className="text-sm text-[#676767] dark:text-gray-400">
                        Supported formats: PDF, DOC, DOCX
                      </p>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" />
                  </Label>
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="comment">
                    Upload Background Image or Video
                  </Label>
                </div>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <AiOutlineCloudUpload className="text-[#52B69A] text-6xl mb-4" />
                      <p className="mb-2 text-[18px] text-[#52B69A] dark:text-gray-400">
                        <span className="font-semibold text-black">
                          Drag and drop your image or video file here or
                        </span>{" "}
                        Browse
                      </p>
                      <p className="text-sm text-[#676767] dark:text-gray-400">
                        Supported formats: JPG, PNG, MP4
                      </p>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" />
                  </Label>
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="countries">Select Narrator/Character</Label>
                </div>
                <Select id="countries" required>
                  <option>Choose...</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </Select>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-6/12">
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="countries">Choose Voice Type</Label>
                    </div>
                    <Select id="countries" required>
                      <option>Choose...</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </Select>
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="countries">Voice Speed</Label>
                    </div>
                    <div className="w-full">
                      <input type="range" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-6/12">
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="countries">Subtitles</Label>
                    </div>
                    <div className="toggle_wrap border border-[#d1d5db] flex justify-between items-center px-4 py-2.5 rounded-md">
                      <p>Subtitle Off</p>
                      <input type="checkbox" id="switch" />
                      <label for="switch">Toggle</label>
                    </div>
                  </div>
                </div>
                <div className="w-6/12">&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button className="bg-white hover:bg-[#5C5C5C] border border-[#5C5C5C] px-4 py-1 text-[#5C5C5C] hover:text-white text-base font-semibold flex justify-center items-center rounded-md">
              Cancel
            </Button>
            <Button className="bg-[#52b69a] hover:bg-black px-4 py-1 text-white text-base font-semibold flex justify-center items-center rounded-md">
              Add Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAudio;
