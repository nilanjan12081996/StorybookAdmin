import {
  Button,
  FileInput,
  Label,
  Progress,
  Select,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  createAudioForCharater,
  createAudioForFinal,
  createAudioForNarator,
  getVoice,
} from "../../Reducer/AddAudioSlice";
import { useSelector } from "react-redux";

const ManageAudio = () => {
  const { voice } = useSelector((state) => state?.audios);
  const dispatch = useDispatch();
  const [isNarrator, setIsNarrator] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };
  useEffect(() => {
    dispatch(getVoice());
  }, []);
  console.log("voice", voice);

  const handleChangeCharater = (e) => {
    console.log("narator", e.target.value);
    setIsNarrator(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    if (isNarrator === "narator") {
      formData.append("text", data?.text);
      formData.append("narrator_voice", data?.narrator_voice);
      formData.append("language_accent", selectedLanguage);
      formData.append("voice_speed", data?.voice_speed);
      formData.append("width", 1280);
      formData.append("height", 720);
      dispatch(createAudioForNarator(formData)).then((res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 200) {
          dispatch(
            createAudioForFinal({
              chunks: res?.payload?.chunks,
              pdf_uuid: res?.payload?.pdf_uuid,
            })
          );
        }
      });
    } else if (isNarrator === "character") {
      formData.append("text", data?.text);
      formData.append("language_accent", selectedLanguage);
      formData.append("voice_speed", data?.voice_speed);
      formData.append("width", 1280);
      formData.append("height", 720);
      dispatch(createAudioForCharater(formData)).then((res) => {
        if (res?.payload?.status_code === 200) {
          dispatch(
            createAudioForFinal({
              chunks: res?.payload?.chunks,
              pdf_uuid: res?.payload?.pdf_uuid,
            })
          );
        }
      });
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    rows={12}
                    {...register("text")}
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
                      <FileInput
                        id="dropzone-file"
                        className="hidden"
                        {...register("file")}
                      />
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
                  <Select
                    id="countries"
                    onChange={(e) => {
                      handleChangeCharater(e);
                    }}
                  >
                    <option>Choose...</option>
                    <option value="narator">Narrator</option>
                    <option value="character">Character</option>
                  </Select>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="w-6/12">
                    {isNarrator == "narator" && (
                      <>
                        <div className="w-full">
                          <div className="mb-2 block">
                            <Label htmlFor="countries">Choose Voice Type</Label>
                          </div>

                          <Select
                            id="countries"
                            {...register("narrator_voice")}
                          >
                            <option>Choose...</option>
                            {voice?.data?.map((v) => {
                              return (
                                <>
                                  <option key={v?.id} value={v?.name}>
                                    {v?.name}
                                  </option>
                                </>
                              );
                            })}
                          </Select>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="w-6/12">
                    <div className="w-full">
                      <div className="mb-2 block">
                        <Label htmlFor="countries">Voice Speed</Label>
                      </div>
                      <div className="w-full">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          step="1"
                          className="w-full"
                          {...register("voice_speed")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <Label htmlFor="countries">Choose Accent Type</Label>
                  </div>

                  <Select
                    id="countries"
                    value={selectedLanguage}
                    onChange={handleSelectLanguage}
                  >
                    <option>Choose...</option>
                    <option value="american_english">American English</option>
                    <option value="british_english">British English</option>
                    <option value="indian_english">Indian English</option>
                    <option value="australian_english">
                      Australian English
                    </option>
                    <option value="russian_english">Russian English</option>
                  </Select>
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
              <Button
                type="submit"
                className="bg-[#52b69a] hover:bg-black px-4 py-1 text-white text-base font-semibold flex justify-center items-center rounded-md"
              >
                Add Story
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAudio;
