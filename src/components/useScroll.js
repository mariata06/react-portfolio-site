//контролирует появление анимации на скролле страницы
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
    const controls = useAnimation();
    controls.mount(); // разобраться (добавлен для устранение ошибки)
    //useInView передает во view true или false в зависимости от появления элемента(element) при скролле с порогом treshold 
    const [element, view] = useInView({ threshold: 0.5});
    if (view) {
        controls.start('show');
    } else { 
        controls.start("hidden");
    }
    return [element, controls];
};

