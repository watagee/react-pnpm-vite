import { useRef, useEffect } from 'react';

const DomAccess = () => {
  // useRefの型引数にHTMLInputElementを指定
  const myInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // ?.演算子を使ってnullチェックを行いながらフォーカスを設定
    myInputRef.current?.focus();
    console.log('useEffectが実行されました');
  }, []);

  console.log('MyComponentがレンダリングされました');

  return <input ref={myInputRef} />;
};

export default DomAccess;