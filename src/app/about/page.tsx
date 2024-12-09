import Link from 'next/link'
import BackImage from '@/component/BackImage'

export const metadata = {
  title: 'TechAmply | About',
}

const Page = () => {
  return (
    <>
      <BackImage title='About' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-xl'>
          <div>
            <article>
              <p className='my-5'>
                TechAmplyは、プログラミング1年目の僕が技術に挑戦していく技術ブログです。
              </p>
              <p className='my-5'>
                プログラミングを初学者の方でも、このサイトを見るだけでエンジニアとして成長できることを目指しています。
              </p>
              <p className='my-5'>
                このサイトの最終的な目標は、エンジニア1年目からプロになるために必要なスキルを身につけることができる記事を作成することです。
              </p>
              <p className='my-5'>
                どうか長い目で応援していただけるとうれしいです。よかったら
                <Link
                  className='link link-ghost link-underline'
                  href='https://x.com/wisdom_plus_jp'
                >
                  著者のツイッター
                </Link>
                もフォローしてください。
              </p>
              <p>
                当サイトは
                <Link className='link link-ghost link-underline' href='https://loosedrawing.com/'>
                  Loose Drawing
                </Link>
                様の画像を利用させていただいております。
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
