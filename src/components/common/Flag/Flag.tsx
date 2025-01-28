import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export const FlagExample = ({ countryCode, countryName }: { countryCode: string, countryName: string }) => (
    <Card style={{ margin: '10px' }}>
    <CardImg
        top
        width="100%"
        src={`/flags/${countryCode.toLowerCase()}.svg`}
        alt={`${countryCode} Flag`}
        style={{ height: '150px', objectFit: 'cover' }}
    />
    <CardBody>
        <CardTitle tag="h5" className='m-0'>{countryName}</CardTitle>
        {/* <CardText>{countryCode.toUpperCase()}</CardText> */}
    </CardBody>
</Card>
);
