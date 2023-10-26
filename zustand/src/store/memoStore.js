import { create } from "zustand";

const useMemoStore = create((set) => ({
  memo: {
    text: "",
    id: "",
  },
  setMemo: (text) =>
    set({
      memo: {
        text: text,
        id: new Date().getTime(),
      },
    }),
  memoList: [],
  setMemoList: (newMemo) =>
    set((prev) => ({
      memoList: [...prev.memoList, newMemo],
    })),
  setRemoveList: (id) => {
    set((prev) => ({
      memoList: prev.memoList.filter((memo) => memo.id !== id),
    }));
  },
}));

export default useMemoStore;
