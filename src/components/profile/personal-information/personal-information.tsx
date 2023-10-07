import s from './personal-information.module.scss'

import { Avatars as Avatar } from '@/components/ui/avatar/avatar.tsx'
import { Card } from '@/components/ui/card'
import { EditableSpan } from '@/components/ui/editable-span/editable-span.tsx'
import { Typography } from '@/components/ui/typography'
import { UploadPhoto } from '@/components/ui/upload-photo/upload-photo.tsx'

type Props = {
  email: string | null
  avatar: string | null
  name: string | null
  onLogout: () => void
  onAvatarChange: (newAvatar: File) => void
  onNameChange: (newName: string) => void
}

export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
}: Props) => {
  const handleNameChanged = (name: string) => onNameChange(name)

  const handleAvatarChange = (newAvatar: File) => onAvatarChange(newAvatar)

  const handleLogout = () => onLogout()

  return (
    <Card className={s.profileContainer}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.photoContainer}>
        <div>
          <Avatar src={avatar!} />
          <UploadPhoto onAvatarChange={handleAvatarChange} />
        </div>
      </div>
      <EditableSpan
        name={name!}
        email={email!}
        handleLogout={handleLogout}
        onValueChange={handleNameChanged}
      />
    </Card>
  )
}
