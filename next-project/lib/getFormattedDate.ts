export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { dateStyle: 'long' }).format(new Date(dateString))
}
//'ja-Jp' 2024年0ｘ月ｘｘ日