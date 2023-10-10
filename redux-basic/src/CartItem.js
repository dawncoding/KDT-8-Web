import { useDispatch } from 'react-redux';
import { REMOVE_CART } from './store/cart';

export default function CartItem({ value }) {
    const dispatch = useDispatch();
    //filter를 사용하여 새로운 배열 반환
    const removeCart = (id) => {
        ///setCart(cart.filter((element) => element.id !== id));
        dispatch({ type: REMOVE_CART, id });
    };

    return (
        <div key={value.id}>
            <span>
                {value.name} : {value.price * value.quantity}원 ({value.quantity}개)
            </span>
            <button onClick={() => removeCart(value.id)}>제거</button>
        </div>
    );
}
