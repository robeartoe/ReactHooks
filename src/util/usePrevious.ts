import { useRef, useEffect } from "react";
  
interface Metadata {
  metadata: string;
}
  
export function usePrevious<T extends Metadata>(value: T): T {
  console.log(value.metadata) //There is a guarantee 
  // that metadata will exist in this value!
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value;
  }, [value]); 
  return ref.current;
}