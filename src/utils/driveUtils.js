// src/utils/driveUtils.js
export function getDownloadUrl(viewUrl) {
  const match = viewUrl.match(/\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return viewUrl;
}
