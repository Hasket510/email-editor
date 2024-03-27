import { EmailEditor } from '../../components/EmailEditor/EmailEditor'
import { EmailList } from '../../components/EmailList/EmailList'

export function Home() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 0.6fr',
				padding: '1.5rem',
			}}
		>
			<EmailEditor />
			<EmailList />
		</div>
	)
}
