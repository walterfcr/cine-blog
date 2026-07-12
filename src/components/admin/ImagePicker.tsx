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
    group
    relative
    overflow-hidden
    rounded-lg
    border-2
    cursor-pointer
    transition-all
    ${
      selected === image.file_path
        ? 'border-accent ring-2 ring-accent'
        : 'border-transparent hover:border-border'
    }
  `}
          >
            <img
              src={getImageUrl(image.file_path)}
              alt=""
              className="
                aspect-[2/3]
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/50
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              <span className="font-medium text-white">Elegir imagen</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImagePicker
