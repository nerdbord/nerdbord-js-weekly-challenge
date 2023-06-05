interface ModalProps {
    isClicked: boolean;
	setIsClicked: (isClicked: boolean) => void;
}
interface InitialProps {
	setIsClicked: (isClicked: boolean) => void;
}
export type { InitialProps, ModalProps };
