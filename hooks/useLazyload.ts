/**
 * 根据传入的目标 DOM 进行 Observer
 * 当其进入视口时，执行指定的回调函数
 * @param target 目标 DOM
 * @param cb 回调函数
 * @returns
 */
const useLazyload = (target: HTMLElement | undefined, cb: () => void) => {
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].intersectionRatio <= 0) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb(); // 当进入视口时，执行回调
        observer.unobserve(entry.target); // 加载后取消 observe，避免重复发送请求
      }
    });
  });

  target && observer.observe(target);

  return {
    observer,
  };
};

export default useLazyload;
