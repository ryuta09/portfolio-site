export default function ProfilePage() {
	return (
		<article className='mx-auto max-w-[800px] px-4 py-8'>
			<h2 className='font-bold text-3xl'>自己紹介</h2>
			<p className='mt-2 text-sm'>
				プロフィールページをご覧いただきありがとうございます！
			</p>
			<p className='text-sm'>
				こちらのページでは、私の経歴などを紹介していきます。
			</p>
			<article className='mt-4 flex flex-col gap-4'>
				<h3 className='font-bold text-2xl'>経歴</h3>
				<article>
					<h4 className='font-bold text-lg'>
						販売員時代(2017年4月〜2023年3月)
					</h4>
					<p className='text-sm'>
						地元群馬県を卒業と同時に就職のために上京。
						<br />
						誰もが知っている大手通信会社の代理店の社員として在籍し、店舗の販売員として従事。
						<br />
						中で来店されるお客様への対応や、スタッフの教育、店舗運営などを担当しました。
					</p>
				</article>
				<article>
					<h4 className='font-bold text-lg'>
						Webメディア運営会社(2023年4月〜現在)
					</h4>
					<p className='text-sm'>
						・自社サービスの新規機能の開発・既存機能の改修を担当。
						<br />
						・WordPressにて構築されたメディアサイトの改修・保守
						<br />
						・グループ会社が運用しているECサイト(ecforce)のコーディング・改修・保守
						など多岐に渡る業務を担当しています。
					</p>
				</article>
			</article>
			<div className='my-4 border'></div>
			<article className='flex flex-col gap-4'>
				<h3 className='font-bold text-2xl'>強み・担当分野</h3>
				<article>
					<h4 className='font-bold text-lg'>フロントエンド開発</h4>
					<ul>
						<li className='ml-4 list-disc text-sm'>
							Next.js・React を用いた Web アプリケーション開発
						</li>
						<li className='ml-4 list-disc text-sm'>
							TypeScript による型安全な実装
						</li>
						<li className='ml-4 list-disc text-sm'>
							継続的にコードの読みやすさ・保守性を意識した実装
						</li>
					</ul>
				</article>
				<article>
					<h4 className='font-bold text-lg'>Webサイト制作</h4>
					<ul>
						<li className='ml-4 list-disc text-sm'>
							HTML / CSS / JavaScript を用いたシンプルな Webサイト制作
						</li>
						<li className='ml-4 list-disc text-sm'>
							セマンティックなHTML・レスポンシブ対応
						</li>
						<li className='ml-4 list-disc text-sm'>
							LP・コーポレートサイトのフロント実装
						</li>
					</ul>
				</article>
				<article>
					<h4 className='font-bold text-lg'>WordPress制作</h4>
					<ul>
						<li className='ml-4 list-disc text-sm'>
							カスタム投稿・タクソノミーを使用したオリジナルテーマの作成
						</li>
						<li className='ml-4 list-disc text-sm'>
							クライアントの運用方法に合わせた構造設計
						</li>
					</ul>
				</article>
				<article>
					<h4 className='font-bold text-lg'>ECサイトの開発</h4>
					<ul>
						<li className='ml-4 list-disc text-sm'>
							ecforceの仕様に則った実装・カスタマイズ
						</li>
						<li className='ml-4 list-disc text-sm'>
							レイアウト調整、テンプレート改修、表示改善などの対応
						</li>
						<li className='ml-4 list-disc text-sm'>
							Shopify を学習中で、テーマ構造や Liquid
							の知識を活かした提案・実装にも取り組んでいます
						</li>
					</ul>
				</article>
			</article>
			<div className='my-4 border'></div>
			<article>
				<h3 className='mt-6 font-bold text-2xl'>課題に寄り添えるエンジニア</h3>
				<p className='mt-2 text-sm'>
					エンジニアとして大切にしていることは、ただ作るだけでなく誰かの困りごとに寄り添うことです。
					<br />
					実装に入る前の段階から、コミュニケーションを取り、どのような形が運用しやすいのかを考えながら整えていくことを心がけています。
					<br />
					今後はフロント側でのスキル向上はもちろんのこと、ユーザー視点に立った設計や、モバイルアプリの開発にも興味があるのでチャレンジ精神を持って取り組んでいきたいと考えています。
					<br />
					そのためにも、日々の学習や実践を通じてスキルを磨き続けることを大切にしています。
				</p>
			</article>
		</article>
	)
}
