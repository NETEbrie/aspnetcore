export function getBlazorDownloadSize() {
  const frame = document.createElement('iframe');
  const promise = new Promise((resolve, reject) => {
    window.onBlazorDownloadSize = (size) => resolve(size);

    try {
      document.body.appendChild(frame);
      frame.src = 'blazor-frame-downloadsize.html';
    } catch (error) {
      reject(error);
    }
  });
  promise.then(() => document.body.removeChild(frame));
  return promise;
}
