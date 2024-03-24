import { useEffect, useState } from "react";

const useClientMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
export default useClientMounted;
