import type { TmdbImage } from '@/types/TmdbImagesResponse'
import { getImageUrl } from '@/lib/utils/image'

interface ImagePickerProps {
  title: string
  images: TmdbImage[]
  selected: string | null
  onSelect: (path: string) => void
  type: 'poster' | 'backdrop'
}

function ImagePicker({
  title,
  images,
  selected,
  onSelect,
  type,
}: ImagePickerProps) {
  const isBackdrop = type === 'backdrop'

  return (
    <div className="space-y-4">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}

      <div
        className={
          isBackdrop
            ? 'grid grid-cols-1 gap-4 sm:grid-cols-2'
            : 'grid grid-cols-2 gap-3 md:grid-cols-4'
        }
      >
        {images.map((image) => (
          <button
            key={image.file_path}
            type="button"
            onClick={() => onSelect(image.file_path)}
            className={`
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-lg
              border-2
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
              className={`
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
                ${isBackdrop ? 'aspect-video' : 'aspect-[2/3]'}
              `}
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
