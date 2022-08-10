import type { Ref } from 'vue';

export interface AuthPagePropData {

}

export interface AuthPageProps {
    data: AuthPagePropData | null
}

export interface AuthPageInstance {
    email: Ref<string> | null
    password: Ref<string> | null
    authorize : () => void
    redirectToBack: () => void
}
