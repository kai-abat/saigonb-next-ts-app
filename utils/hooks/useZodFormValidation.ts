import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SafeParseReturnType, z } from "zod";
import { State } from "../actions/menuActions";
import { extractErrorMessge, extractServerErrorMessage } from "../Helper";

const useZodClientValidation = (
  name: string,
  schema: z.ZodString | z.ZodNumber | z.ZodBoolean,
  componentType: string,
  formState: State
) => {
  const [valid, setValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const nameRef = useRef<string>(name);
  const schemaRef = useRef(schema);
  const componentTypeRef = useRef(componentType);
  const formStateRef = useRef<State>(formState);

  useEffect(() => {
    let servMessageMenuName = extractErrorMessge(formState, name);
    if (servMessageMenuName !== null) {
      const errMessage = extractServerErrorMessage(servMessageMenuName);
      if (errMessage) {
        setValid(false);
        setMessage(errMessage);
        console.log("servMessageMenuName", servMessageMenuName);
      }
    }
  }, [formState, name]);

  const onBrowseImageStateRender = (value: string) => {
    checkSchema(nameRef.current, value);
  };

  const onChangeSelectEvent = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name;
    console.log(event.target.value);

    checkSchema(name, event.target.value);
  };

  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    console.log(event.target.value);

    switch (componentTypeRef.current.toLowerCase()) {
      // checkbox / switch
      case "checkbox":
        checkSchema(name, event.target.checked);
        break;

      // input
      default:
        checkSchema(name, event.target.value);
        break;
    }
  };

  const checkSchema = (field: string, value: string | boolean | number) => {
    let res: any;
    res = schemaRef.current.safeParse(value);

    console.log("checkSchema", field, value);
    if (res.error != undefined) {
      var obj = JSON.parse(res.error);

      setValid(false);
      setMessage(obj[0].message);
    } else {
      setValid(true);
      setMessage("");
    }
  };

  return {
    valid,
    message,
    onChangeEvent,
    onChangeSelectEvent,
    name,
    onBrowseImageStateRender,
  };
};

export default useZodClientValidation;
