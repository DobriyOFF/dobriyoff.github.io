<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'Отправка новой формы',
    'email_message' => 'У вас есть новая заявка!',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => '',
    'to' => 'vladanxo@yandex.ru'
    ),
    'fields' => array(
    'name' => array(
    'order' => 1,
    'type' => 'string',
    'label' => 'Name',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Name\' is required.'
    )
    ),
    'address' => array(
    'order' => 2,
    'type' => 'string',
    'label' => 'Address',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Address\' is required.'
    )
    ),
    'email' => array(
    'order' => 3,
    'type' => 'email',
    'label' => 'Email',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Email\' is required.'
    )
    ),
    'doctype' => array(
    'order' => 4,
    'type' => 'string',
    'label' => 'doctype',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'doctype\' is required.'
    )
    ),
    'message' => array(
    'order' => 5,
    'type' => 'string',
    'label' => 'Message',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Message\' is required.'
    )
    ),
    'agree' => array(
    'order' => 6,
    'type' => 'checkbox',
    'label' => 'Я согласен на обработку персональной данных',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Я согласен на обработку персональной данных\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>