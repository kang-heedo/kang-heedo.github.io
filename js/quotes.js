const quotes = [
{
   quote: "일은 당신의 삶에서 큰 부분을 차지할 겁니다. 삶에서 만족을 느끼기 위해선 당신이 위대하다고 생각하는 일을 해야 하죠. 위대한 일을 할 방법은 당신이 하는 그 일을 사랑하는 겁니다 ",
   author: "Steve Jobs",
},
{
    quote: "네 인생을 네가 망치고 있으면서 부모 탓을 하지 마라. 불평만 일삼을 것이 아니라 잘못한 것에서 교휸을 얻어라",
    author:"Bill Gates",
},
{
    quote: "뜨거운 열정보다 중요한 것은 지속적인 열정이다",
    author:"Mark Zuckerberg",
},
{
    quote: "사람들이 부동산에서 돈을 벌고 주식에선 돈을 잃는 이유가 있다. 그들은 집은 선택하는 데는 몇 달을 투자하지만 주식선정은 수 분 만에 해버린다",
    author:"Peter Lynch",
},
{
    quote: "회사가 손실을 입는다면 나는 이해할 것이다. 회사가 평판을 잃는다면 나는 분개할 것이다. 평판은 값을 매길 수 없는 자산이다",
    author:"Warren Buffett",
},
{
    quote: "비가 오는 것을 예측하는 것은 중요하지 않다. 하지만 방주를 짓는 것은 중요하다",
    author:"Warren Buffett",
},
{
    quote: "정말 중요한 일이라면 다른 생각을 가지고 있더라도 당신은 그 일을 계속 해야하는 것이다",
    author:"Elon Reeve Musk",
},
{
    quote: "비판받는 것을 두려워한다면, 그냥 아무것도 하지 않으면 된다",
    author:"Jeffrey Preston Bezos",
},
{
    quote: "성공과 실패는 그사람의 습관에 의해 좌우된다",
    author:"Napoleon Hill",
},
{
    quote: "알고 있다는 것은, 내가 모른다는 걸 안다는 것이다. 이게 진정한 지혜다.",
    author:"Socrates",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;