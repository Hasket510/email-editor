import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service'
import styles from './EmailList.module.scss'

export function EmailList() {
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(),
	})
	return (
		<div className={styles.list}>
			{data?.map(email => (
				<div key={email.text}>{parse(email.text)}</div>
			))}
			<div>
				Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				impedit, in officia, illo,<u>dignissimos</u> labore <i>incidunt</i>
				voluptate tempore eaque <b>deleniti</b> ab harum. Veniam tempora animi
				magnam repellat dignissimos eius ipsa.
			</div>
		</div>
	)
}
