import {  useState } from 'react';

export default function CreateTaskModal({
  // eslint-disable-next-line react/prop-types
  addTask,
}) {
  const [showModal, setShowModal] = useState(false);

  
  const handleSubmit = async () => {
   const title= document.getElementById('title').value;
    const description= document.getElementById('description').value;
    const task = {
      title,
      description,
    };
    await addTask(task);
    setShowModal(false);
  };
  return (
    <>
      <button
        className=" text-black text-sm bg-white font-bold uppercase py-3 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-2 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Task
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="rounded shadow-lg relative flex flex-col w-full bg-[#6e4998] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-3 ">
                  <h3 className="text-xl font-semibold">Create Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="grid gap-6 grid-cols-1 bg-white p-6 w-96">
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 "
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Description"
                      required
                    />
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end px-5 py-3 bg-white rounded-b">
                  <button
                    className="text-red-800 background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#6e4998] text-white active:bg-[#6e4998] font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
