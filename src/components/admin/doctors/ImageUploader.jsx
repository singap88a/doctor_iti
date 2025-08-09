import React from 'react';
import { toast } from 'react-toastify';

const ImageUploader = ({ image, setFormData, fileInputRef }) => {
  // Function to compress and convert image to base64
  const compressAndConvertImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        // Fill canvas with white background first
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        setFormData(prev => ({ ...prev, image: dataUrl }));
      };
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      toast.error('Failed to process image');
    };
  };

  return (
    <div>
      <label className="block mb-2 text-gray-700">صورة الطبيب</label>
      <div 
        className="p-6 text-center transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
        onClick={() => fileInputRef.current.click()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) {
            compressAndConvertImage(file);
          }
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        {image ? (
          <div className="relative">
            <img 
              src={image} 
              alt="Doctor preview" 
              className="mx-auto bg-white max-h-40"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <p className="mt-2 text-sm text-gray-500">اسحب صورة أخرى هنا أو انقر للتغيير</p>
          </div>
        ) : (
          <div>
            <i className="mb-2 text-3xl text-gray-400 fas fa-cloud-upload-alt"></i>
            <p className="text-gray-500">اسحب وأفلت الصورة هنا أو انقر للاختيار</p>
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            compressAndConvertImage(file);
          }
        }}
      />
    </div>
  );
};

export default ImageUploader;