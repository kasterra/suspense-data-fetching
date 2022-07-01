# ⚛️ suspense-data-fetching

React18 버전에서 비동기 작업까지 처리할 수 있는 `<Suspense/>`가 소개되었습니다. 해당 기능들을 더 잘 이해하기 위해서, 만든 학습용 레포지토리 입니다.

## 📚 참고한 글

[logrocket 블로그의 글](https://blog.logrocket.com/react-suspense-data-fetching/)을 참고하여 작성하였습니다. 해당 글에서는 create-react-app을 사용하지 않고, 처음부터 작성하였지만, React 18이 정식 배포가 된 지금 시점에서는 굳이 그럴 필요가 없다고 생각하여, create-react-app을 이용해서 만들었습니다.

## ⚠️ 참고사항

해당 글은 React 18 릴리즈 전에 발표된 글이라서, 실험적인 기능이라고 강조하고 있습니다만, 해당 글에서 다루는 `<SuspenseList>`를 제외한 `<Suspense>`에 관한 기능은 현재 React 18에서 잘 동작합니다. `<SuspenseList>`를 사용하고 싶다면, experimental 버전을 사용해야 합니다.

```bash
npm i react@experimental
```
