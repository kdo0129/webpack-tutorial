const path = require('path');

module.exports = {
	name: 'webpack_test', //어떤 webpack 설정인지 이름을 부여
	mode: 'development', //모드 옵션을 통해서 개발환경인지 배포환경인지 설정가능
	devtool: 'eval',
	resolve: {
		//entry에서 자동으로 배열 안에 있는 확장자로 선택해서 불러오기
		extensions: ['.js', '.jsx'],
	},
	//번들 시작점 파일을 선택 (입력)
	entry: {
		app: ['./client'], //resolve - extension에서 확장자 설정해서 client만 적어줘도 알아서 js or jsx 파일에서 검색
	},
	// loader를 사용하여 JS 파일 이외의 파일을 웹팩이 읽을 수 있게 변환 시켜준다.
	module: {
		rules: [
			{
				test: /\.jsx?/, //불러 올 파일 정규식
				loader: 'babel-loader', // 사용할 loader 이름
				options: {
					//사용할 loader 옵션 설정
					presets: [
						[
							'@babel/preset-env',
							{
								targets: {
									browsers: ['> 1% in KR'],
								},
								debug: true,
							},
						],
						'@babel/preset-react',
					],
				},
			},
		],
	},
	// 번들된 파일을 출력
	output: {
		path: path.join(__dirname, 'dist'), // '현재 경로/dist' 디렉토리의 output path 설정
		filename: 'app.js', // 출력할 파일 이름 설정
	},
};
