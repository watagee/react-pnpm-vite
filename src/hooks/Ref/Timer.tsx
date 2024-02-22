import { useRef, useEffect } from 'react';

const Timer = () => {
    // useRefに対して初期値0を持つnumber型を指定
    const countRef = useRef<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
        countRef.current += 1;
        console.log(`Timer: ${countRef.current}`);
        }, 1000);

        // コンポーネントのクリーンアップ関数でタイマーをクリア
        return () => clearInterval(timer);
    }, []);

    return <div>コンソールでタイマーのカウントを確認してください。</div>;
};

export default Timer;