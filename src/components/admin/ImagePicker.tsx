import type { TmdbImage } from '@/types/TmdbImagesResponse'
import { getImageUrl } from '@/utils/image'

interface ImagePickerProps {
  title: string
  images: TmdbImage[]
  selected: string | null
  onSelect: (path: string) => void
}

function ImagePicker({ title, images, selected, onSelect }: ImagePickerProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((image) => (
          <button
            key={image.file_path}
            type="button"
            onClick={() => onSelect(image.file_path)}
            className={`
              overflow-hidden
              rounded-lg
              border-2
              transition-all
              ${
                selected === image.file_path
                  ? 'border-accent'
                  : 'border-transparent'
              }
            `}
          >
            <img
              src={getImageUrl(image.file_path)}
              alt=""
              className="aspect-[2/3] w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImagePicker
