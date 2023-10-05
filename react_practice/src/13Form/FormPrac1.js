import { useForm } from 'react-hook-form';
​
export default function FormPrac1() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
​
    const onSubmit = (data) => {
        console.log('data', data);
    };
​
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label id="name">이름</label>
                <input type="text" id="name" {...register('name', { required: '이름은 필수입니다' })} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
            </div>
            <div>
                <label id="age">나이</label>
                <input
                    type="number"
                    id="age"
                    {...register('age', { min: { message: '0이상의 숫자만 가능합니다', value: 0 } })}
                />
                {errors.age?.message}
            </div>
            <button>제출</button>
        </form>
    );
}