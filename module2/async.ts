{
  //  promise or async function

  type SomeThing = string;

  const createPromiseFn = (): Promise<SomeThing> => {
    return new Promise<SomeThing>((resolve, reject) => {
      const data: SomeThing = "hello world";
      if (data) {
        resolve(data);
      } else {
        reject("Reject hoye gache ");
      }
    });
  };

  const result = async (): Promise<SomeThing> => {
    const data: SomeThing = await createPromiseFn();
    return data;
  };

  //   result();

  // fetching json data

  interface Todo {
    user: string;
    id: number;
    title: string;
     completed: string;  // why not getting error ,,,,  data যদি বড় হয় তাহলে কি করবে ?
  }

  const fetchData = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
  };
  fetchData();

  //
}
