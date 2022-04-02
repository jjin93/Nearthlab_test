const LabelButtonIcon = ({labels}) => {

  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="18" viewBox="0 0 56 18">
    <g fill="none" fill-rule="evenodd">
      <rect width="56" height="18" fill="#E9EEF1" rx="9" />
      <text fill="#2A67E2" font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR" font-size="10" font-weight="400" letter-spacing="-.278">
        <tspan x="17" y="12.553">
          라벨{labels}개
        </tspan>
      </text>
      <path fill="#2A67E2" d="M10.708 8.293l4.363 4.364-1.414 1.414-4.364-4.363a3 3 0 0 1-4.001-4.001l2 2 1.415-1.414-2-2a3 3 0 0 1 4.001 4.001z" />
    </g>
    </svg>
  );
};

export default LabelButtonIcon;
