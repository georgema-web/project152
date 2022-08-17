import { getData } from './firebase';

export const FunctionDiv = () => {
    getData().then((data) => console.log(data));
    return <div>functietstsonDiv</div>;
};
