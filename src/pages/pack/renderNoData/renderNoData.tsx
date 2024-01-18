import s from '@/pages/pack/pack.module.scss'

export const RenderNoData = () => {
  return (
    <tr className={s.trPack}>
      <td colSpan={5}>
        <p className={s.textPackNoData}>Oops... data missing</p>
      </td>
    </tr>
  )
}
