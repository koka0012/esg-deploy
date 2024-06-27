export interface ILoginRequest {
  token: string;
  username: string;
  blocked: boolean;
}

export async function login() {
  const response = await fetch('https://account.farmguide.com.br/api/login?data={"type":"user","userName":"augusto.silveira@spectrax.com.br","pass":"c8222289113b"}')

  const data = await response.json();

  console.log(data)
  return data as ILoginRequest;
}