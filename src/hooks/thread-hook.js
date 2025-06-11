import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import RecyclingEntry from "../services/recyclePointEntries";
import ThreadEntry from "../services/thread-service";

const useCreateThread = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return ThreadEntry.createThread(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};

/*const useLikeThread = () => {
  console.log("HOOK")
  return useMutation((threadId) => ThreadEntry.likeById(threadId));
};*/
const useLikeThread = () => {
  
  const mutation = useMutation((userData) =>
    ThreadEntry.likeById2(userData)
  );

  const addResponse = async (userData) => {

      console.log("assa")
      console.log(userData)
      const response = await mutation.mutateAsync(userData);
      return response;
  };

  return {
    addResponse,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};




const useReplyThread = () => {
  console.log("dsds")
  const mutation = useMutation(({ threadId ,data}) =>
    ThreadEntry.addReply(threadId , data)
  );

  const addResponsee = async (threadId , data) => {
    try {
      console.log("assa")
      console.log(threadId)
      const response = await mutation.mutateAsync({ threadId , data });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    addResponsee,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};


const useGetAllThreads = () => {
  console.log("DAAAAAAAATA222")
  return useQuery(["allThreads"],
  ThreadEntry.getAllThreads);
};

const useGetAThread = (threadId) => {

  return useQuery(["allThread", threadId], () => ThreadEntry.getThread(threadId));
};



export {
  useCreateThread,
  useGetAThread,
  useGetAllThreads,
  useReplyThread,
  useLikeThread
};
