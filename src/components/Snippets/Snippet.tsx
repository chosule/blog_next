"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import Title from "../Title";

const MOCK_DATA = [
  {
    id: 1,
    title: "title1",
    text: "코드 테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 ",
  },
  {
    id: 2,
    title: "title2",
    text: "코드 테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 ",
  },
  {
    id: 3,
    title: "title3",
    text: "내용test 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis ",
  },
  {
    id: 4,
    title: "title4",
    text: "코드 테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 코드테스트 ",
  },
];

export default function Snippet() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="mt-[50px]">
      <Title>Code snippets</Title>
      <div className="mb-4 text-[24px]">React</div>
      <motion.div className="flex h-full items-center justify-center ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {MOCK_DATA.map((item) => (
            <motion.div
              className={`card h-full min-h-[143px] transform cursor-pointer rounded-lg bg-white p-3 shadow-md transition-transform duration-500 hover:scale-105 ${
                selectedId === item.id ? "card-selected" : ""
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-content">
                <motion.h2 className="mb-2 text-[16px] font-bold ">
                  {item.title}
                </motion.h2>
                <motion.h5 className="mb-2 text-base font-bold">
                  {item.text}
                </motion.h5>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {MOCK_DATA.map(
                (item) =>
                  item.id === selectedId && (
                    <motion.div
                      className="mx-auto h-[370px] w-[700px] max-w-lg rounded-lg bg-white p-4 shadow-md"
                      layoutId={`card-container-${item.id}`}
                      key={item.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <motion.div className="relative">
                        <motion.button
                          className="absolute right-2 top-2 rounded-full px-2 py-1 text-center text-white"
                          onClick={() => setSelectedId(null)}
                        >
                          <IoCloseCircleOutline className="text-2xl text-black" />
                        </motion.button>
                        <motion.h2 className="mb-2 text-xl font-bold">
                          {item.title}
                        </motion.h2>
                        <motion.p
                          className="text-md text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Additional content can go here!
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div>test</div>
    </div>
  );
}
