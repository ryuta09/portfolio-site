export default function ProfilePage() {
	return (
		<div className='mx-auto max-w-[800px] px-4 py-20'>
			<section className='mt-4 md:mt-6'>
				<h2 className='font-bold text-3xl'>自己紹介</h2>
				<p className='mt-2 text-sm'>
					プロフィールページをご覧いただきありがとうございます！
				</p>
				<p className='text-sm'>
					こちらのページでは、私の経歴などを紹介していきます。
				</p>
				<section className='mt-4 md:mt-6'>
					<h3 className='mb-4 font-bold text-2xl md:mb-6'>経歴</h3>
					<div className='relative'>
						<div className='absolute top-0 left-4 h-full w-0.5 bg-[#7383BF]'></div>

						<div className='relative mb-6 flex items-start'>
							<div className='z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7383BF] bg-[#F2F3F5]'></div>
							<div className='ml-6 flex-1'>
								<div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
									<div className='mb-2 flex items-center gap-2'>
										<div className='rounded-full border border-[#7383BF] bg-[#7383BF]/10 px-2 py-1 font-semibold text-[#7383BF] text-xs'>
											2017年4月〜2023年3月
										</div>
									</div>
									<h4 className='mb-3 font-bold text-gray-800 text-lg'>
										販売員時代
									</h4>
									<p className='text-gray-600 text-sm leading-relaxed'>
										大学卒業まで地元である群馬県高崎市にて過ごした後、大学卒業と同時に上京。
										<br />
										誰もが知っている大手通信会社の代理店の社員として在籍し、店舗の販売員として従事。
										<br />
										来店されるお客様への対応や、スタッフの教育、店舗運営などを担当しました。
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex items-start'>
							<div className='z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#585D78] font-bold text-sm text-white'></div>
							<div className='ml-6 flex-1'>
								<div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
									<div className='mb-2 flex items-center gap-2'>
										<div className='rounded-full border border-[#7383BF] bg-[#7383BF]/10 px-2 py-1 font-medium text-[#7383BF] text-xs'>
											2023年4月〜現在
										</div>
										<div className='rounded-full border border-orange-300 bg-orange-100 px-2 py-1 font-medium text-orange-700 text-xs'>
											現職
										</div>
									</div>
									<h4 className='mb-3 font-bold text-gray-800 text-lg'>
										Webメディア運営会社
									</h4>
									<p className='text-gray-600 text-sm leading-relaxed'>
										・自社サービスの新規機能の開発・既存機能の改修を担当。
										<br />
										・WordPressにて構築されたメディアサイトの改修・保守
										<br />
										・グループ会社が運用しているECサイト(ecforce)のコーディング・改修・保守
										など多岐に渡る業務を担当しています。
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className='my-6 border md:my-10'></div>

				<section>
					<h3 className='font-bold text-2xl'>強み・担当分野</h3>
					<div className='mt-4 grid grid-cols-2 gap-6 md:mt-6'>
						<section className='rounded-3xl border border-[#7383BF] bg-white p-4 shadow-sm'>
							<h4 className='font-bold text-lg'>フロントエンド開発</h4>
							<ul className='mt-2 flex flex-col gap-2'>
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
						</section>
						<section className='rounded-3xl border border-[#7383BF] bg-white p-4 shadow-sm'>
							<h4 className='font-bold text-lg'>Webサイト制作</h4>
							<ul className='mt-2 flex flex-col gap-2'>
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
						</section>
						<section className='rounded-3xl border border-[#7383BF] bg-white p-4 shadow-sm'>
							<h4 className='font-bold text-lg'>WordPress制作</h4>
							<ul className='mt-2 flex flex-col gap-2'>
								<li className='ml-4 list-disc text-sm'>
									カスタム投稿・タクソノミーを使用したオリジナルテーマの作成
								</li>
								<li className='ml-4 list-disc text-sm'>
									クライアントの運用方法に合わせた構造設計
								</li>
							</ul>
						</section>
						<section className='rounded-3xl border border-[#7383BF] bg-white p-4 shadow-sm'>
							<h4 className='font-bold text-lg'>ECサイトの開発</h4>
							<ul className='mt-2 flex flex-col gap-2'>
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
						</section>
					</div>
				</section>
				<div className='my-6 border md:my-10'></div>
				<section>
					<h3 className='font-bold text-2xl'>課題に寄り添えるエンジニア</h3>
					<p className='mt-2 text-sm leading-normal'>
						エンジニアとして大切にしていることは、ただ作るだけでなく誰かの困りごとに寄り添うことです。
						<br />
						実装に入る前の段階から、コミュニケーションを取り、どのような形が運用しやすいのかを考えながら整えていくことを心がけています。
						<br />
						今後はフロント側でのスキル向上はもちろんのこと、ユーザー視点に立った設計や、モバイルアプリの開発にも興味があるのでチャレンジ精神を持って取り組んでいきたいと考えています。
						<br />
						そのためにも、日々の学習や実践を通じてスキルを磨き続けることを大切にしています。
					</p>
				</section>
			</section>
		</div>
	)
}
