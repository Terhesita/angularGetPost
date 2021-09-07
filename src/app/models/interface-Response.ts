export interface ResponseInterface {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}

 interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
}

 interface Support {
    url:  string;
    text: string;
}

/*export interface ResponseInterface {
    data: Post[];
}

 interface Post {
    id:   number;
    name: string;
}*/
