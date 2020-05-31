function func(callback) {
  process.nextTick(callback, "callback!!");
}

// process.nextTick을 사용하면 비동기적 흐름으로 멀티 스레딩 되어 CPU를 더 효율 적으로 사용할 수 있지만

try {
  func((param) => {
    a.a = 0;
  });
} catch (e) {
  console.log("exception!!");
}

// try~catch 문으로는 예외 처리가 불가능해지는 상황이 생김
